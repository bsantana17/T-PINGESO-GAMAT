package usach.cl.gamatbackend.facadeBd;

import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import usach.cl.gamatbackend.entities.Building;
import usach.cl.gamatbackend.entities.Distributor;
import usach.cl.gamatbackend.entities.Item;
import usach.cl.gamatbackend.entities.ItemState;
import usach.cl.gamatbackend.entities.Request;
import usach.cl.gamatbackend.repositories.RequestRepository;


@Service
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
	public Request updateRequest(Request newRequest) {
		// no recuerdo si actualia automaticamente
		return requestRepository.save(newRequest);
		
	}

	@Override
	public boolean deleteRequest(Integer idRequest) {
		Request request = requestRepository.findById(idRequest).orElse(null);
		requestRepository.delete(request);
		return true;
	}


	@Override
	public Set<Building> getAllBuilding() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Set<Request> getRequestOfBuilding() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Building saveBuilding(Building building) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Building updateBuilding(Building building) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public boolean deleteBuilding(Integer idBuilding) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public Item updateItem(Item item) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public boolean deleteItem(Integer iDitem) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public Set<Distributor> getDistributor() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Distributor createDistributor(Distributor distributor) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Distributor updateDistributor(Distributor distributor) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public boolean deleteDistributor(Integer idDistributor) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public Set<ItemState> getItemStates() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public ItemState createItemState(ItemState itemState) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public ItemState updateItemState(ItemState itemState) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public boolean deleteItemState(Integer idItemState) {
		// TODO Auto-generated method stub
		return false;
	}
	
	// operaciones Request
	
	

}
