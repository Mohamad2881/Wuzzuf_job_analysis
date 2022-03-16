package com.Wuzzuf_job_analysis.services;

import com.Wuzzuf_job_analysis.model.JobsPojo;
import org.apache.spark.sql.Row;

import java.util.List;

public interface ServiceInterface {
    void readData();

    List<String> getStructure();

    List<Row> getSummary();

    List<JobsPojo> getData();

    List<Row> jobCount();

    List<Row> getPopularTitles();

    List<List<?>> drawChart(String colName);

    List<Row> getPopularAreas();

    List<Row> getPopularSkills();

    List<Row> factorize(String colName);

    List<Object> kMeans();

//    Dataset<JobsPojo> factorize(String colName);
}
