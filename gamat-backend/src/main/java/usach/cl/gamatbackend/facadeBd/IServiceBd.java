package usach.cl.gamatbackend.facadeBd;



import usach.cl.gamatbackend.entities.Request;

import java.util.List;

//interfaz que usa patron facade para manejar acceso a repositorios BD
public interface IServiceBd {

	//operaciones request
	public List<Request> findRequestByState(String state, Integer idAprobador, Integer idBuilding);
	
	public Request saveNewRequest(Request request);
	
	public Request updateRequest(Request newRequest,Integer idRequest);
	
	public boolean deleteRequest (Integer idRequest);
	
	
}
