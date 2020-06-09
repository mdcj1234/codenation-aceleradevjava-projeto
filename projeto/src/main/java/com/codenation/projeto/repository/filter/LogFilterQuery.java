package com.codenation.projeto.repository.filter;

import com.codenation.projeto.repository.projection.SimpleLog;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface LogFilterQuery {

    public Page<SimpleLog> search(LogFilter logFilter, Pageable pageable);
}
