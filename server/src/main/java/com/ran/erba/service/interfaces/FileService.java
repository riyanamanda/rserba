package com.ran.erba.service.interfaces;

import org.springframework.web.multipart.MultipartFile;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;

/**
 * @author Riyan Amanda
 * {@code @linkedin} <a href="https://linkedin.com/in/riyan-amanda">...</a>
 * @since 30/01/2025, Thursday
 **/

public interface FileService {
    void upload(String path, String filename, MultipartFile file) throws IOException;
    InputStream serve(String filename) throws FileNotFoundException;
}
