package usach.cl.gamatbackend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import usach.cl.gamatbackend.entities.Request;
import usach.cl.gamatbackend.facadeBd.IServiceBd;
import usach.cl.gamatbackend.repositories.RequestRepository;
import usach.cl.gamatbackend.serviceMail.IServiceMail;

@CrossOrigin
@RestController
@RequestMapping("/requests")
public class RequestService {
	
	@Autowired
	private IServiceBd serviceBd;
	@Autowired 
	private IServiceMail mailService;

	@GetMapping("/create")
	public Request createRequest(@RequestBody Request request) {
	
		if(request != null) {
			Request newRequest= serviceBd.saveNewRequest(request);
			
			// datos aprobador 
			//mailService.sendMailNotification("", "", "");
			return newRequest;
		}
		return null;
		
	}
	
	@PutMapping("/update")
	public Request editRequest(@RequestBody Request request) {
		if(request!=null) {
			return serviceBd.updateRequest(request);
		}
		return null;
		
	}
	
	@DeleteMapping("/delete/{id}")
	public HttpStatus deleteRequest(@PathVariable("id") Integer idRequest) {
		if(serviceBd.deleteRequest(idRequest)) return HttpStatus.OK;
		return HttpStatus.INTERNAL_SERVER_ERROR;
	}

}
