package usach.cl.gamat.serviceMail;


import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.sendgrid.Method;
import com.sendgrid.Request;
import com.sendgrid.Response;
import com.sendgrid.SendGrid;



@Service
public class ServiceMailImp implements IServiceMail {
	@Autowired
	private JavaMailSender emailSender;
	

	@Override
	public void sendMailNotification(String to, String subject, String body,String ruta) throws IOException {
		// TODO Auto-generated method stub
		String texto =body;
		texto+="\n\n Puede acceder desde el siguiente enlace: "
				+ "https://pingeso-frontend.herokuapp.com/"
				+ ruta;
		SimpleMailMessage message = new SimpleMailMessage();
		message.setFrom("gamat.notificaciones");
		message.setTo(to);
		message.setSubject(subject);
		message.setText(texto);
		emailSender.send(message);
		
//		  SendGrid sg = new SendGrid(System.getenv("SENDGRID_API_KEY"));
//	      Request request = new Request();
//	      request.method = Method.POST;
//	      request.endpoint = "mail/send";
//	      request.body = "{\"personalizations\":[{\"to\":[{\"email\":\""+to+"\"}],\"subject\":\"Hello World from the SendGrid Java Library!\"}],\"from\":{\"email\":\"sebastian.pinto.g@usach.cl\"},\"content\":[{\"type\":\"text/plain\",\"value\": \"Hello, Email!\"}]}";
//	      Response response = sg.api(request);
//	      System.out.println(response.statusCode);
//	      System.out.println(response.body);
//	      System.out.println(response.headers);
//		
		
	}
	// aca iran la implementacion de los metodos para generar notificaciones por mail
}