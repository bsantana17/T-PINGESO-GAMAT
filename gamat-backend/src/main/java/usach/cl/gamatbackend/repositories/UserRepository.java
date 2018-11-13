package usach.cl.gamatbackend.repositories;

import usach.cl.gamatbackend.entities.User;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface UserRepository extends PagingAndSortingRepository<User, Integer> {

}
