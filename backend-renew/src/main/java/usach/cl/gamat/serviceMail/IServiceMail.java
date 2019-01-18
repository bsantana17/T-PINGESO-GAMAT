package usach.cl.gamat.serviceMail;

import java.io.IOException;

public interface IServiceMail {
    // aca iran los metodos para generar notificaicones por mail
    public void sendMailNotification(String to, String subject,String body,String ruta) throws IOException;
}