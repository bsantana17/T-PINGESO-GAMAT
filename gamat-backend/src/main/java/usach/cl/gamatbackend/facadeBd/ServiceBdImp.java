package usach.cl.gamatbackend.facadeBd;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import usach.cl.gamatbackend.entities.Request;
import usach.cl.gamatbackend.repositories.RequestRepository;

public class ServiceBdImp implements IServiceBd {
	
	//conexion repositorios
	@Autowired
	private RequestRepository requestRepository;
	
	
	

	@Override
	public List<Request> findRequestByState(String state, Integer idAprobador, Integer idBuilding) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Request saveNewRequest(Request request) {
		// TODO Auto-generated method stub
		request.setState("Pendiente por revisar");
		return requestRepository.save(request);
	}

	@Override
	public Request updateRequest(Request newRequest, Integer idRequest) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public boolean deleteRequest(Integer idRequest) {
		// TODO Auto-generated method stub
		return false;
	}
	
	// operaciones Request
	
	

}
