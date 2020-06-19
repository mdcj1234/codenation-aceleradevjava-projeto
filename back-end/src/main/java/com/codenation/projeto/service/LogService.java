package com.codenation.projeto.service;

import com.codenation.projeto.model.Log;
import com.codenation.projeto.repository.LogRepository;
import com.codenation.projeto.repository.filter.LogFilter;
import com.codenation.projeto.repository.projection.LogSummary;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class LogService {

    @Autowired
    public LogRepository logRepository;

    public Optional<Log> findById(Long id) {
        return logRepository.findById(id);
    }

    public Page<LogSummary> search(LogFilter logFilter, Pageable pageble) {
        return logRepository.search(logFilter, pageble);
    }

    public Log save(Log log) {
        return logRepository.save(log);
    }
}
