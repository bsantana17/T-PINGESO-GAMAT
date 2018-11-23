package usach.cl.gamatbackend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import usach.cl.gamatbackend.entities.Building;
import usach.cl.gamatbackend.entities.Request;
import usach.cl.gamatbackend.entities.User;
import usach.cl.gamatbackend.facadeBd.IServiceBd;
import usach.cl.gamatbackend.repositories.RequestRepository;
import usach.cl.gamatbackend.repositories.UserRepository;
import usach.cl.gamatbackend.serviceMail.IServiceMail;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@CrossOrigin
@RestController
@RequestMapping("/requests")
public class RequestService  implements Serializable {
	
	@Autowired
	private IServiceBd serviceBd;
	@Autowired
	private UserRepository userRepository;
	@Autowired 
	private IServiceMail mailService;

	@PostMapping("/create/{idUser}/{idBuilding}")
	public Request createRequest(
			@RequestBody Request request,
			@PathVariable("idUser") Integer idUser,
			@PathVariable("idBuilding") Integer idBuilding) {
		if(request != null) {
		User user = serviceBd.getUserById(idUser);
		Building building = serviceBd.getBuildingById(idBuilding);	
		request.setBuilding(building);
		request.setUser(user);
		request.setState("pendiente por revisar");
			Request newRequest= serviceBd.saveRequest(request);
			// datos aprobador 
			//mailService.sendMailNotification("", "", "");
			return newRequest;
		}
		return null;
		
	}
	
	@GetMapping("/approve/{idRequest}")
	public HttpStatus aprobarRequest(@PathVariable("idRequest") Integer id) {
		Request request = serviceBd.getRequestById(id);
		if (request != null) {
			request.setState("Aprobado");
			serviceBd.saveRequest(request);
			return HttpStatus.OK;
		}
		return HttpStatus.INTERNAL_SERVER_ERROR;
	}

	/*//Método para el comprador
	@RequestMapping(value = "/", method = RequestMethod.GET)
	@ResponseBody
	public Iterable<Request> getAllRequests(){
		return serviceBd.findAllRequest();
	}*/
	@GetMapping("/{idUser}")
	@ResponseBody
	public Set<Request> getRequestJefeObra(@PathVariable("idUser") Integer id){
		User user = serviceBd.getUserById(id);
		return user.getRequests();
		
	}
	@RequestMapping(value = "/{idUser}/owned", method = RequestMethod.GET)
	@ResponseBody
	public List<Request> listRequest(@PathVariable("idUser") Integer idUser){
		User user = userRepository.findById(idUser).get();
		List<Request> requests = new ArrayList<>();
		
		if (user.getIdUser() == 1){ //Jefe de obra
			for (Request request:user.getRequests()){
				requests.add(request);
			}
		}

		else if(user.getIdUser() == 2){//Aprobador
			for(Request request:user.getRequests()){
				for (Building building:user.getBuildings()){
					if(request.getBuilding() == building){
						requests.add(request);
					}
				}
			}
		}

		else if(user.getIdUser() == 3){//Comprador
			for(Request request:serviceBd.findAllRequest()){
				if(request.getState() == "Aprobado"){
					requests.add(request);
				}
			}
		}
		return requests;
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
