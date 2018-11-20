package usach.cl.gamatbackend.facadeBd;



import usach.cl.gamatbackend.entities.Building;
import usach.cl.gamatbackend.entities.Distributor;
import usach.cl.gamatbackend.entities.Item;
import usach.cl.gamatbackend.entities.ItemState;
import usach.cl.gamatbackend.entities.Request;

import java.util.List;
import java.util.Set;

//interfaz que usa patron facade para manejar acceso a repositorios BD
public interface IServiceBd {

	//operaciones request
	public List<Request> findRequestByState(String state, Integer idAprobador, Integer idBuilding);
	
	public Request saveNewRequest(Request request);
	
	public Request updateRequest(Request newRequest);
	
	public boolean deleteRequest (Integer idRequest);
	
	//operaciones Building
	
	public Set<Building> getAllBuilding();
	
	public Set<Request> getRequestOfBuilding();
	
	public Building saveBuilding(Building building);
	
	public Building updateBuilding(Building building);
	
	public boolean deleteBuilding(Integer idBuilding);
	
	
	//operaciones items
	public Item updateItem(Item item);
	
	public boolean deleteItem(Integer iDitem);
	
	// operaciones bistributor
	
	public Set<Distributor> getDistributor();
	
	public Distributor createDistributor(Distributor distributor);
	
	public Distributor updateDistributor(Distributor distributor);
	
	public boolean deleteDistributor(Integer idDistributor);
	
	// operaciones itemState
	
	public Set<ItemState>getItemStates();
	
	public ItemState createItemState(ItemState itemState);
	
	public ItemState updateItemState(ItemState itemState);
	
	public boolean deleteItemState(Integer idItemState);
	
	
	
}
