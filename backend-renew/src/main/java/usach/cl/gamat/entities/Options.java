package usach.cl.gamat.entities;

import javax.persistence.Column;

//import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;
//import javax.validation.constraints.NotNull;

import org.springframework.lang.Nullable;

@Entity
@Table(name = "options")
public class Options {
	private static final long serialVersionUID = 1L;
		@Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
		@Column(name = "id", unique = true)
	    private int idOption;
		
	 @Nullable
	 @Column(name = "administracion")
	 	private int  administracion;
	 @Nullable
	 @Column(name = "despacho")
	 	private int despacho;
	 
	 @Column
	 @Lob
	 private String unidades;
	 
	public int getIdOption() {
		return idOption;
	}
	public void setIdOption(int idOption) {
		this.idOption = idOption;
	}
	public int getAdministracion() {
		return administracion;
	}
	public void setAdministracion(int administracion) {
		this.administracion = administracion;
	}
	public int getDespacho() {
		return despacho;
	}
	public void setDespacho(int despacho) {
		this.despacho = despacho;
	}
	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	public String getUnidades() {
		return unidades;
	}
	public void setUnidades(String unidades) {
		this.unidades = unidades;
	}
	
	
	 	
//	 	private List<String> unidades;

	 	


}
