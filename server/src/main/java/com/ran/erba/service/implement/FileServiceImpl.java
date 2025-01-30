package com.ran.erba.service.implement;

import com.ran.erba.service.interfaces.FileService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.*;
import java.nio.file.Files;
import java.nio.file.Paths;

/**
 * @author Riyan Amanda
 * {@code @linkedin} <a href="https://linkedin.com/in/riyan-amanda">...</a>
 * @since 30/01/2025, Thursday
 **/

@Service
public class FileServiceImpl implements FileService {

    @Value("${project.uploads.location}")
    private String rootPath;

    @Override
    public void upload(String filepath, String filename, MultipartFile file) throws IOException {
        String filePath = rootPath + File.separator + filename;
        File fileDirectory = new File(rootPath);
        if (!fileDirectory.exists()) fileDirectory.mkdirs();

        Files.copy(file.getInputStream(), Paths.get(filePath));
    }

    @Override
    public InputStream serve(String filename) throws FileNotFoundException {
        String filePath = rootPath + File.separator + filename;
        InputStream inputStream = new FileInputStream(filePath);

        return inputStream;
    }
}
