package com.codenation.projeto.repository.filter;

import com.codenation.projeto.repository.projection.LogSummary;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface LogFilterQuery {

    public Page<LogSummary> search(LogFilter logFilter, Pageable pageable);
}
