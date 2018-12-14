package usach.cl.gamat.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import usach.cl.gamat.entities.*;
import usach.cl.gamat.facadeBD.IServiceBD;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@CrossOrigin
@RestController
@RequestMapping("/requests")
public class RequestService {
    @Autowired
    private IServiceBD serviceBD;

    @GetMapping("/")
    @ResponseBody
    public List<Request> getAllRequest(){return (List<Request>) serviceBD.findAllRequest();}

    @GetMapping("/{idRequest}")
    @ResponseBody
    public Request getRequest(@PathVariable("idRequest") Integer id){
        return serviceBD.getRequestById(id);
    }
    //Crear Request
    @PostMapping("/create/{idUser}")
    public Request createRequest(@RequestBody Request request, @PathVariable("idUser") Integer idUser) {
        if(request != null) {
            Manager user = serviceBD.getManagerById(idUser);
            Building building = user.getBuilding();
            request.setBuilding(building);
            request.setManager(user);
            request.setState("Pendiente por revisar");
            Request newRequest= serviceBD.saveRequest(request);
            // datos aprobador
            //mailService.sendMailNotification("", "", "");
            return newRequest;
        }
        return null;

    }
    //Aprobar request
    @PostMapping("/approve/{idRequest}")
    public HttpStatus aprobarRequest(@PathVariable("idRequest") Integer id,@RequestBody Request request) {
//		Request request = serviceBd.getRequestById(id);
        if (request != null) {
            request.setState("Aprobado");
            serviceBD.saveRequest(request);
            return HttpStatus.OK;
        }
        return HttpStatus.INTERNAL_SERVER_ERROR;
    }
    
    
    @PostMapping("/update-items/{idUser}/{type}")
    public HttpStatus updateItems(@PathVariable("idUser") Integer id,@PathVariable("type") Integer type,@RequestBody Request request) {
//		Request request = serviceBd.getRequestById(id);
    	Driver driver=serviceBD.getDriverById(id);
    	String state="Retirada";
    	switch (type) {
		case 0:
			state="Retirada";
			break;
		case 1:
			state="Entregada";
			break;
		case 2:
			state="Recibida";
			break;	

		default:
			break;
		}
        if (request != null) {
            request.setState(state);
            request.setDriver(driver);
            serviceBD.saveRequest(request);
            return HttpStatus.OK;
        }
        return HttpStatus.INTERNAL_SERVER_ERROR;
    }


    @PostMapping("/budget/approve/{idRequest}")
    public HttpStatus aprobarBudget(@PathVariable("idRequest") Integer id,@RequestBody Request request) {
//		Request request = serviceBd.getRequestById(id);
        if (request != null) {
            request.setState("Autorizada");
            serviceBD.saveRequest(request);
            return HttpStatus.OK;
        }
        return HttpStatus.INTERNAL_SERVER_ERROR;
    }
    //Rechazar budget
    @PostMapping("/budget/reject/{idRequest}")
    public HttpStatus rechazarBudget(@PathVariable("idRequest") Integer id,@RequestBody Request request) {
//		Request request = serviceBd.getRequestById(id);
        if (request != null) {
            request.setState("Rechazada");
            serviceBD.saveRequest(request);
            return HttpStatus.OK;
        }
        return HttpStatus.INTERNAL_SERVER_ERROR;
    }
    //Cotizar request
    @PostMapping("/budget/{idRequest}")
    public HttpStatus cotizarRequest(@PathVariable("idRequest") Integer id,@RequestBody Request request) {
//		Request request = serviceBd.getRequestById(id);
        if (request != null) {
            request.setState("Cotizacion");
            serviceBD.saveRequest(request);
            return HttpStatus.OK;
        }
        return HttpStatus.INTERNAL_SERVER_ERROR;
    }

    //Rechazar Request
    @PostMapping("/reject/{idRequest}")
    public HttpStatus rechazarRequest(@PathVariable("idRequest") Integer id,@RequestBody Request request) {
//		Request request = serviceBd.getRequestById(id);
        if (request != null) {
            request.setState("Cancelada");
            serviceBD.saveRequest(request);
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

    //Request de un jefe de obra
    @GetMapping("/{idUser}/manager")
    @ResponseBody
    public List<Request> getRequestJefeObra(@PathVariable("idUser") Integer id){
        Manager user = serviceBD.getManagerById(id);
        Iterable<Request> requests = serviceBD.findAllRequest();
        List<Request> createdRequests = new ArrayList<>();
        for (Request request:requests){
            if(request.getManager() == user){
                createdRequests.add(request);
            }
        }
        return createdRequests;

    }
    //Request visibles por aprobador
    @GetMapping("/{idUser}/{state}/approver")
    @ResponseBody
    public List<Request> getRequestAprobador(
            @PathVariable("idUser") Integer id,
            @PathVariable("state") Integer state){
        String nameState;
        switch (state) {
            case 0:
                nameState="Pendiente por revisar";
                break;
            case 1:
                nameState="Aprobado";
                break;
            case 2:
                nameState="Cotizacion";
                break;
            case 3:
            	nameState="Entregada";
            	break;

            default:
                nameState=null;
                break;
        }
        Approver user = serviceBD.getApproverById(id);
        List<Request> requests = new ArrayList<>();
        //for(UserType rol:user.getRoles()){
        //if(user.getRol().getIdUserType() == 1){
            for (Building building:user.getBuildings()){
                for(Request request : building.getRequests()) {
                	
                    if (request.getState().equals(nameState)){
                    	
                        requests.add(request);
                    }
                }
            }
        //}
        //}
        return requests;
    }
    //Request visibles al comprador
    @GetMapping("/{idUser}/{state}/buyer")
    @ResponseBody
    public List<Request> getRequestComprador(@PathVariable("idUser") Integer id,@PathVariable("state") Integer state){
        Buyer user = serviceBD.getBuyerById(id);
        List<Request> requestsApprove = new ArrayList<>();
        Iterable<Request> requests = serviceBD.findAllRequest();

        //for(UserType rol:user.getRoles()){
        //if(user.getRol().getIdUserType() == 3){
        String nameState;
        switch (state) {
            case 0:
                nameState="Aprobado";
                break;
            case 1:
                nameState="Autorizada";
                break;
        

            default:
                nameState=null;
                break;
        }
            for (Request request:requests){

                request.setManager(null);

                if (request.getState().equals(nameState) ){
                	request.setBuilding(null);
                    requestsApprove.add(request);
                }
            }
        //}
        //}
        return requestsApprove;
    }
    
    @GetMapping("/{idUser}/driver")
    public List<Request> getRequestDriver(@PathVariable("idUser")Integer id){
    	Driver driver = serviceBD.getDriverById(id);
    	List<Building> buildings =serviceBD.findAllBuilding();
    	
    	List<Request> requests= new ArrayList<Request>();
    	for (Building building : buildings) {
    		System.out.println(building.getAddress());
			for (Request req: building.getRequests()) {
				if(req.getDriver()!= null && req.getDriver().getIdUser()==id) {
					requests.add(req);
				}
			}
				
		}
    	return requests;
    }

//    @GetMapping("/attendant/{id}")
//    @ResponseBody
//    public Driver getDriverAttendant(@PathVariable("id") Integer id){
//        Request request = serviceBD.getRequestById(id);
//        Driver user = new Driver();
//        if(request.getItems().size() > 0){
//            user = request.getItems().get(0).getDriver();
//			/*for(Item item: request.getItems()){
//				EN CASO DE QUE UN PEDIDO TENGA VARIOS CHOFERES
//			}*/
//        }
//        return user;
//    }

    //asignar chofer a items
    @RequestMapping(value = "/driver/{idDriver}/{idRequest}", method = RequestMethod.PUT)
    @ResponseBody
    public void sendBudget(@PathVariable("idDriver") Integer idDriver, @PathVariable("idRequest") Integer idRequest){
//        List<Item> items = budget.getItems();
    	Request budget = serviceBD.getRequestById(idRequest);
        budget.setDriver(serviceBD.getDriverById(idDriver));
        budget.setState("Asignada");
        serviceBD.saveRequest(budget);
//        for(Item item:items){
//            item.setDriver(serviceBD.getDriverById(id));
//            serviceBD.saveItem(item);
//        }
    }

    @PutMapping("/update")
    public Request editRequest(@RequestBody Request request) {
        if(request!=null) {
            return serviceBD.updateRequest(request);
        }
        return null;

    }

    @DeleteMapping("/delete/{id}")
    public HttpStatus deleteRequest(@PathVariable("id") Integer idRequest) {
        if(serviceBD.deleteRequest(idRequest)) return HttpStatus.OK;
        return HttpStatus.INTERNAL_SERVER_ERROR;
    }
}
