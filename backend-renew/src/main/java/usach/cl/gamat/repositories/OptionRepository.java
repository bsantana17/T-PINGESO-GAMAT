package usach.cl.gamat.repositories;

import org.springframework.data.repository.CrudRepository;

import usach.cl.gamat.entities.Log;
import usach.cl.gamat.entities.Options;

public interface OptionRepository extends CrudRepository<Options, Integer>{

}
