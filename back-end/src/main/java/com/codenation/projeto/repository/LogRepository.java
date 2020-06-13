package com.codenation.projeto.repository;

import com.codenation.projeto.model.Log;
import com.codenation.projeto.repository.filter.LogFilter;
import com.codenation.projeto.repository.filter.LogFilterQuery;
import com.codenation.projeto.repository.projection.SimpleLog;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LogRepository extends JpaRepository<Log, Long>, LogFilterQuery {

    @Override
    Page<SimpleLog> search(LogFilter logFilter, Pageable pageable);
}