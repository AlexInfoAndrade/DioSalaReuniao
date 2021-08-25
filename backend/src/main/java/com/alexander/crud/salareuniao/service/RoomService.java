package com.alexander.crud.salareuniao.service;

import com.alexander.crud.salareuniao.dto.response.ResponseMessageDTO;
import com.alexander.crud.salareuniao.exception.RegisterNotFoundException;
import com.alexander.crud.salareuniao.model.Room;
import com.alexander.crud.salareuniao.repository.RoomRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor(onConstructor = @__(@Autowired))
public class RoomService {

    private RoomRepository repository;

    public Room roomById(Long id) throws RegisterNotFoundException {
        return verifyIfExists(id);
    }

    public List<Room> listRoom() {
        return repository.findAll();
    }

    public ResponseMessageDTO createRoom(Room room) {
        Room roomSaved = repository.save(room);

        return createResponseMsg(roomSaved.getId(), "Created room with id::");
    }

    public ResponseMessageDTO updateRoomById(Long id, Room room) throws RegisterNotFoundException {
        verifyIfExists(id);

        room.setId(id);
        Room roomUpdated = repository.save(room);

        return createResponseMsg(roomUpdated.getId(), "Updated room with id::");
    }

    public void deleteRoomById(Long id) throws RegisterNotFoundException {
        verifyIfExists(id);

        repository.deleteById(id);
    }

    private Room verifyIfExists(Long id) throws RegisterNotFoundException {
        return repository.findById(id).orElseThrow(
                () -> new RegisterNotFoundException(id)
        );
    }

    private ResponseMessageDTO createResponseMsg(Long id, String msg) {
        return ResponseMessageDTO
                .builder()
                .msg(msg + id)
                .build();
    }
}
