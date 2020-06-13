package com.codenation.projeto.controller;

import com.codenation.projeto.model.Log;
import com.codenation.projeto.repository.filter.LogFilter;
import com.codenation.projeto.repository.projection.SimpleLog;
import com.codenation.projeto.service.LogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;

@RestController
@CrossOrigin
@RequestMapping("/logs")
public class LogController {

    @Autowired
    private LogService logService;

    @GetMapping
    public Page<SimpleLog> search(LogFilter logfilter, @PageableDefault(page = 0, size = 10, sort = "id") Pageable pageble) {
        return logService.search(logfilter, pageble);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Log> findById(@PathVariable Long id) {
        Log log = logService.findById(id).orElse(null);
        return log != null ? ResponseEntity.ok(log) : ResponseEntity.notFound().build();
    }

    @PostMapping
    public ResponseEntity<Log> create(@Validated @RequestBody Log log, HttpServletResponse response) {
        Log logSalvo = logService.save(log);
        return ResponseEntity.status(HttpStatus.CREATED).body(logSalvo);
    }
}
