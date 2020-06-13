package com.codenation.projeto.repository.filter;

import com.codenation.projeto.model.Log;
import com.codenation.projeto.repository.projection.SimpleLog;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.query.QueryUtils;
import org.springframework.util.StringUtils;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.util.ArrayList;
import java.util.List;

public class LogFilterQueryImpl implements LogFilterQuery {

    @PersistenceContext
    private EntityManager manager;

    @Override
    public Page<SimpleLog> search(LogFilter logFilter, Pageable pageable) {

        CriteriaBuilder builder = manager.getCriteriaBuilder();
        CriteriaQuery<SimpleLog> criteria = builder.createQuery(SimpleLog.class);
        Root<Log> root = criteria.from(Log.class);

        criteria.select(builder.construct(SimpleLog.class
                , root.get("id")
                , root.get("level")
                , root.get("description")
                , root.get("origin")
                , root.get("quantity")
                , root.get("createdAt")));

        Predicate[] predicates = criarRestricoes(logFilter, builder, root);
        criteria.where(predicates);

        criteria.orderBy(QueryUtils.toOrders(pageable.getSort(), root, builder));

        TypedQuery<SimpleLog> query = manager.createQuery(criteria);
        adicionarRestricoesDePaginacao(query, pageable);

        return new PageImpl<>(query.getResultList(), pageable, total(logFilter));
    }

    private Predicate[] criarRestricoes(LogFilter logFilter, CriteriaBuilder builder, Root<Log> root) {
        List<Predicate> predicates = new ArrayList<>();

        if (!StringUtils.isEmpty(logFilter.getId())) {
            predicates.add(builder.equal(
                    builder.lower(root.get("id")), logFilter.getId()));
        }

        if (!StringUtils.isEmpty(logFilter.getLevel())) {
            predicates.add(builder.equal(root.get("level"),logFilter.getLevel()));
        }

        if (!StringUtils.isEmpty(logFilter.getDescription())) {
            predicates.add(builder.like(
                    builder.lower(root.get("description")), "%" + logFilter.getDescription().toLowerCase() + "%"));
        }

        if (!StringUtils.isEmpty(logFilter.getOrigin())) {
            predicates.add(builder.like(
                    builder.lower(root.get("origin")), "%" + logFilter.getOrigin().toLowerCase() + "%"));
        }

        if (!StringUtils.isEmpty(logFilter.getQuantity())) {
            predicates.add(builder.equal(
                    builder.lower(root.get("quantity")), logFilter.getQuantity()));
        }

        return predicates.toArray(new Predicate[0]);
    }

    private void adicionarRestricoesDePaginacao(TypedQuery<?> query, Pageable pageable) {
        int paginaAtual = pageable.getPageNumber();
        int totalRegistrosPorPagina = pageable.getPageSize();
        int primeiroRegistroDaPagina = paginaAtual * totalRegistrosPorPagina;

        query.setFirstResult(primeiroRegistroDaPagina);
        query.setMaxResults(totalRegistrosPorPagina);
    }

    private Long total(LogFilter logFilter) {
        CriteriaBuilder builder = manager.getCriteriaBuilder();
        CriteriaQuery<Long> criteria = builder.createQuery(Long.class);
        Root<Log> root = criteria.from(Log.class);

        Predicate[] predicates = criarRestricoes(logFilter, builder, root);
        criteria.where(predicates);

        criteria.select(builder.count(root));
        return manager.createQuery(criteria).getSingleResult();
    }

}
