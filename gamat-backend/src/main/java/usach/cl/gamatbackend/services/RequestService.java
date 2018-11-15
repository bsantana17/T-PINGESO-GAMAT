package usach.cl.gamatbackend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import usach.cl.gamatbackend.entities.Request;
import usach.cl.gamatbackend.facadeBd.IServiceBd;
import usach.cl.gamatbackend.repositories.RequestRepository;

@CrossOrigin
@RestController
@RequestMapping("/requests")
public class RequestService {
	
	@Autowired
	private IServiceBd serviceBd;
	
	@GetMapping("/create")
	public Request createRequest(@RequestBody Request request) {
		if(request != null) {
			return serviceBd.saveNewRequest(request);
		}
		return null;
		
	}

}
