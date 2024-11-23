package com.erba.server.services;

import com.erba.server.dto.DoctorDto;
import com.erba.server.request.DoctorUpdateRequest;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.autoconfigure.web.WebProperties;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;

/**
 * @author Riyan Amanda
 * @linkedin <a href="https://linkedin.com/in/riyan-amanda">...</a>
 * @since 22/11/2024, Friday
 **/

@Service
@RequiredArgsConstructor
public class FileServiceImpl implements FileService {

    @Value("${project.doctor_image}")
    private String path;

    private final DoctorService doctorService;

    @Override
    @Transactional
    public void uploadDoctorImage(Integer id, MultipartFile image) throws IOException {
        String filename = image.getOriginalFilename();
        String filepath = path + File.separator + filename;
        File f = new File(path);

        Boolean isPathExists = f.exists() || f.mkdirs();
        System.out.println(isPathExists);

        Files.copy(image.getInputStream(), Paths.get(filepath));

        DoctorDto doctor = doctorService.findById(id);
        if (doctor == null) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Doctor not found");
        }

        doctor.setImageUrl(filepath);
        DoctorUpdateRequest doctorUpdateRequest = new DoctorUpdateRequest();
        doctorUpdateRequest.setName(doctor.getName());
        doctorUpdateRequest.setImageUrl(filepath);

        doctorService.update(id, doctorUpdateRequest);
    }
}
