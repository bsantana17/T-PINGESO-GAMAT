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
import usach.cl.gamatbackend.repositories.BuildingRepository;
import usach.cl.gamatbackend.repositories.DistributorRepository;
import usach.cl.gamatbackend.repositories.ItemRepository;
import usach.cl.gamatbackend.repositories.ItemStateRepository;
import usach.cl.gamatbackend.repositories.RequestRepository;


@Service
public class ServiceBdImp implements IServiceBd {
	
	//conexion repositorios
	@Autowired
	private RequestRepository requestRepository;
	
	@Autowired
	private ItemRepository itemRepository;
	
	@Autowired
	private DistributorRepository distributorRepository;
	
	@Autowired
	private ItemStateRepository itemStateRepository;
	
	@Autowired
	private BuildingRepository buildingRepository;
	
	
	
	// operaciones Request
	@Override
	public List<Request> findRequestByState(String state, Integer idAprobador, Integer idBuilding) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Iterable<Request> findAllRequest() {
		// TODO Auto-generated method stub
		return requestRepository.findAll();
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

	//Building

	@Override
	public Set<Building> getAllBuilding() {
		// TODO Auto-generated method stub
		return  (Set<Building>) buildingRepository.findAll();
	}

	@Override
	public Set<Request> getRequestOfBuilding(Integer id) {
		Building building = buildingRepository.findById(id).orElse(null);
		// TODO Auto-generated method stub
		return building.getRequests();
	}

	@Override
	public Building saveBuilding(Building building) {
		// TODO Auto-generated method stub
		return buildingRepository.save(building);
	}

	@Override
	public Building updateBuilding(Building building) {
		// TODO Auto-generated method stub
		return buildingRepository.save(building);
	}

	@Override
	public boolean deleteBuilding(Integer idBuilding) {
		// TODO Auto-generated method stub
		Building building = buildingRepository.findById(idBuilding).orElse(null);
		if(building != null) {
			buildingRepository.delete(building);
			return true;
			
		}
		return false;
	}
	
	// Item

	@Override
	public Item updateItem(Item item) {
		// TODO Auto-generated method stub
		return itemRepository.save(item);
	}

	@Override
	public boolean deleteItem(Integer iDitem) {
		// TODO Auto-generated method stub
		Item item= itemRepository.findById(iDitem).orElse(null);
		if(item != null) {
			itemRepository.delete(item);
			return true;
		}
		return false;
	}

	
	// Distributor
	
	@Override
	public Set<Distributor> getDistributor() {
		// TODO Auto-generated method stub
		return (Set<Distributor>) distributorRepository.findAll();
	}

	@Override
	public Distributor createDistributor(Distributor distributor) {
		// TODO Auto-generated method stub
		return distributorRepository.save(distributor);
	}

	@Override
	public Distributor updateDistributor(Distributor distributor) {
		// TODO Auto-generated method stub
		return distributorRepository.save(distributor);
	}

	@Override
	public boolean deleteDistributor(Integer idDistributor) {
		// TODO Auto-generated method stub
		Distributor distributor = distributorRepository.findById(idDistributor).orElse(null);
		if(distributor != null) {
			distributorRepository.delete(distributor);
			return true;
		}
		return false;
	}

	
	//ItemState
	
	@Override
	public Set<ItemState> getItemStates() {
		// TODO Auto-generated method stub
		return (Set<ItemState>) itemStateRepository.findAll();
	}

	@Override
	public ItemState createItemState(ItemState itemState) {
		// TODO Auto-generated method stub
		return itemStateRepository.save(itemState);
	}

	@Override
	public ItemState updateItemState(ItemState itemState) {
		// TODO Auto-generated method stub
		return itemStateRepository.save(itemState);
	}

	@Override
	public boolean deleteItemState(Integer idItemState) {
		// TODO Auto-generated method stub
		ItemState itemState = itemStateRepository.findById(idItemState).orElse(null);
		if(itemState != null) {
			itemStateRepository.delete(itemState);
			return true;
		}
		return false;
	}
	
	
	
	

}
