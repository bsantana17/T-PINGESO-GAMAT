package usach.cl.gamat.serviceMail;

public interface IServiceMail {
    // aca iran los metodos para generar notificaicones por mail
    public void sendMailNotification(String to, String subject,String body);
}