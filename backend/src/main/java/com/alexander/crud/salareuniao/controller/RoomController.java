package com.alexander.crud.salareuniao.controller;

import com.alexander.crud.salareuniao.dto.response.ResponseMessageDTO;
import com.alexander.crud.salareuniao.model.Room;
import com.alexander.crud.salareuniao.service.RoomService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/v1/rooms")
@AllArgsConstructor(onConstructor = @__(@Autowired))
public class RoomController {

    private RoomService service;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseMessageDTO create(@RequestBody @Valid Room room) {
        return service.createRoom(room);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Room> findById(@PathVariable Long id) {
        return ResponseEntity.ok(
                service.roomById(id)
        );
    }

    @GetMapping
    public ResponseEntity<List<Room>> findAll() {
        return ResponseEntity.ok(
                service.listRoom()
        );
    }

    @PutMapping("/{id}")
    public ResponseMessageDTO update(@PathVariable Long id,
                                     @RequestBody @Valid Room room) {

        return service.updateRoomById(id, room);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable Long id) {
        service.deleteRoomById(id);
    }
}
