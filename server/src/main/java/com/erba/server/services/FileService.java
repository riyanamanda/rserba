package com.erba.server.services;

import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

/**
 * @author Riyan Amanda
 * @linkedin <a href="https://linkedin.com/in/riyan-amanda">...</a>
 * @since 22/11/2024, Friday
 **/
public interface FileService {
    void uploadDoctorImage(Integer id, MultipartFile image) throws IOException;

    byte[] downloadDoctorImage(Integer id) throws IOException;
}
