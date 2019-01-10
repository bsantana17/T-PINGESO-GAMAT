package usach.cl.gamat.entities;

import java.io.ByteArrayOutputStream;
import java.io.File;


import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.logging.Level;
import java.util.logging.Logger;

import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;




public class ExcelUtils {

//	private static final Logger LOGGER = Logger.getLogger("mx.com.hash.newexcel.ExcelOOXML");
	public static byte[] generateExcel(String[][] datos) throws IOException {
		 // Creamos el archivo donde almacenaremos la hoja
        // de calculo, recuerde usar la extension correcta,
        // en este caso .xlsx
//        File archivo = new File("reporte.xlsx");
        System.out.println("aa1");

        // Creamos el libro de trabajo de Excel formato OOXML
        Workbook workbook = new XSSFWorkbook();
        System.out.println("aa1");

        // La hoja donde pondremos los datos
        Sheet pagina = workbook.createSheet("Request");
        System.out.println("aa1");
        // Creamos el estilo paga las celdas del encabezado
//        CellStyle style = workbook.createCellStyle();
        // Indicamos que tendra un fondo azul aqua
        // con patron solido del color indicado
//        style.setFillForegroundColor(IndexedColors.AQUA.getIndex());
//        style.setFillPattern(FillPatternType.SOLID_FOREGROUND);

//        String[] titulos = {"Identificador", "Consumos",
//            "Precio Venta", "Precio Compra"};
//        Double[] datos = {1.0, 10.0, 45.5, 25.50};

        // Creamos una fila en la hoja en la posicion 0
        
        Row fila = pagina.createRow(0);
        fila.createCell(0).setCellValue(datos[0][0]);
        fila.createCell(1).setCellValue(datos[0][1]);
        fila.createCell(2).setCellValue(datos[0][2]);
        fila.createCell(3).setCellValue(datos[0][3]);
        // Creamos el encabezado
   

        // Ahora creamos una fila en la posicion 1
        

        // Y colocamos los datos en esa fila
        for (int i = 1; i < datos.length; i++) {
        	fila = pagina.createRow(i);
            // Creamos una celda en esa fila, en la
            // posicion indicada por el contador del ciclo
        	 fila.createCell(0).setCellValue(datos[i][0]);
             fila.createCell(1).setCellValue(datos[i][1]);
             fila.createCell(2).setCellValue(datos[i][2]);
             fila.createCell(3).setCellValue(datos[i][3]);
        }
        System.out.println("aa1");
        // Ahora guardaremos el archivo
        
            // Creamos el flujo de salida de datos,
            // apuntando al archivo donde queremos 
            // almacenar el libro de Excel
//            FileOutputStream salida = new FileOutputStream(archivo);
        	 System.out.println("aa1");
            ByteArrayOutputStream out = new ByteArrayOutputStream();

            // Almacenamos el libro de 
            // Excel via ese 
            // flujo de datos
            System.out.println("aa1");
            workbook.write(out);
            System.out.println("aa1");

            // Cerramos el libro para concluir operaciones
            workbook.close();

//            LOGGER.log(Level.INFO, "Archivo creado existosamente en {0}", archivo.getAbsolutePath());
            return out.toByteArray();

       
	
	}
}
