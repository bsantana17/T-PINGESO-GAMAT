package usach.cl.gamat.entities;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.Serializable;
import java.text.DateFormat;
import java.text.SimpleDateFormat;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.pdmodel.PDDocumentCatalog;
import org.apache.pdfbox.pdmodel.interactive.form.PDAcroForm;
import org.apache.pdfbox.pdmodel.interactive.form.PDField;
import org.apache.pdfbox.text.PDFTextStripper;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="file_plantillas")
public class FilePlantillaPdf implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	@Id	
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer plantilla_id;
	
	@Column(name="file_name")
	private String fileName;
	 
	@Column(name="file_type")
	private String fileType;
	 
	@Column(name="datos")
	@Lob
	private byte[] data;

	
	public FilePlantillaPdf(String fileName, String fileType, byte[] data) {
        this.fileName = fileName;
        this.fileType = fileType;
        this.data = data;
	}
	
	public FilePlantillaPdf() {
		
	}
	public Integer getId() {
		return plantilla_id;
	}

	public void setId(Integer id) {
		this.plantilla_id = id;
	}

	public String getFileName() {
		return fileName;
	}

	public void setFileName(String fileName) {
		this.fileName = fileName;
	}

	public String getFileType() {
		return fileType;
	}

	public void setFileType(String fileType) {
		this.fileType = fileType;
	}

	public byte[] getData() {
		return data;
	}

	public void setData(byte[] data) {
		this.data = data;
	}

	public static byte[] rellenarCertificado(byte[] plantilla,byte[] plantilla2,Request request) throws IOException {
		
		PDDocument pdfDocument = PDDocument.load(plantilla);
		
		
		ByteArrayOutputStream out = new ByteArrayOutputStream();
		DateFormat df = new SimpleDateFormat("MM/dd/yyyy HH:mm:ss");

        PDDocumentCatalog docCatalog = pdfDocument.getDocumentCatalog();
        PDAcroForm acroForm = docCatalog.getAcroForm();
        
        PDField fieldSolicitante = acroForm.getField("solicitante");
        fieldSolicitante.setValue(request.getManager().getName());
        
        PDField fieldCompañia = acroForm.getField("compañia");
        fieldCompañia.setValue(request.getBuilding().getCompany().getName());
        
        PDField fieldDireccion = acroForm.getField("direccionObra");
        fieldDireccion.setValue(request.getBuilding().getAddress());
        
        PDField fieldFecha = acroForm.getField("fecha");
        fieldFecha.setValue(df.format(request.getDate()));
        
        PDField fieldEstado = acroForm.getField("estado");
        fieldEstado.setValue(request.getState());

        PDField fieldId = acroForm.getField("id");
        fieldId.setValue(Integer.toString(request.getIdRequest()));
        
        int i=1;
        int slot=1;
        int pag=1;
        PDDocument pdfDocument2= PDDocument.load(plantilla2);;
        for (Item item : request.getItems()) {
        	 System.out.println(i);
        	 System.out.println(slot);
        	
        	 if(slot==13) {
//        		 System.out.println("entro a 1");
        		 acroForm.getField("pag").setValue(Integer.toString(pag));
        		i=1;
        		docCatalog = pdfDocument2.getDocumentCatalog();
        		acroForm = docCatalog.getAcroForm();
        		WriteItem(item,acroForm,i,slot);
            	i++;
            	slot++;
            	pag++;
        		
        	}
        	else if(i==127) {
        		 System.out.println("entro a 2");
        		 acroForm.getField("pag").setValue(Integer.toString(pag));
        		i=1;
        		pdfDocument.addPage(pdfDocument2.getPage(0));
        		pdfDocument2 = PDDocument.load(plantilla2);
        		docCatalog = pdfDocument2.getDocumentCatalog();
        		acroForm = docCatalog.getAcroForm();
        		WriteItem(item,acroForm,i,slot);
            	i+=6;
            	slot++;
            	pag++;
            	
        		
        	}
        	else {
//        		 System.out.println("entro a 3");
        		WriteItem(item,acroForm,i,slot);
            	i+=6;
            	slot++;
        	}
			
		}
        if(i<73 && slot <=13) {
//        	pdfDocument.addPage(pdfDocument2.getPage(0));
        	acroForm.getField("pag").setValue(Integer.toString(pag));
        }
        pdfDocument.save(out);
        
//        fieldTaller.setValue(taller);
        pdfDocument.close();
        
        return out.toByteArray();
		
		
	}
	
	public static void WriteItem(Item item, PDAcroForm acroForm,int i,int count) throws IOException {
		System.out.println(i);
		acroForm.getField("Texto"+i).setValue(Integer.toString(count));
		acroForm.getField("Texto"+(i+1)).setValue(item.getName());
		acroForm.getField("Texto"+(i+2)).setValue(item.getDescription());
    	acroForm.getField("Texto"+(i+3)).setValue(Integer.toString(item.getPrice()));
    	acroForm.getField("Texto"+(i+4)).setValue(Integer.toString(item.getQuantity()));
    	Distributor distributor=null;
    	distributor= item.getDistributor();
    	if(distributor!=null) {
    		
    		acroForm.getField("Texto"+(i+5)).setValue(distributor.getName());
    	}
    	else {
    		acroForm.getField("Texto"+(i+5)).setValue("no asignado");
    	}
		
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	
	

	
	

}