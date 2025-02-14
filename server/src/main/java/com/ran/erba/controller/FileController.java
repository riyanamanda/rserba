package com.ran.erba.controller;

import java.io.IOException;
import java.io.InputStream;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StreamUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.ran.erba.service.interfaces.FileService;

import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;

/**
 * @author Riyan Amanda
 * {@code @linkedin} <a href="https://linkedin.com/in/riyan-amanda">...</a>
 * @since 30/01/2025, Thursday
 **/

@RestController
@RequiredArgsConstructor
@RequestMapping(path = "/api/file")
public class FileController {
    private final FileService fileService;

    @PostMapping(
            path = "/upload/post/{post-id}",
            consumes = MediaType.MULTIPART_FORM_DATA_VALUE
    )
    public ResponseEntity<String> uploadPostImage(@PathVariable("post-id") Integer postId, @RequestPart MultipartFile image) throws IOException {
        fileService.uploadPostImage(postId, image);

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping(
            path = "/serve/post/{filename}",
            produces = MediaType.IMAGE_PNG_VALUE
    )
    public void servePostImage(@PathVariable String filename, HttpServletResponse response) throws IOException {
        InputStream resource = fileService.servePostImage(filename);
        response.setContentType(MediaType.IMAGE_PNG_VALUE);
        StreamUtils.copy(resource, response.getOutputStream());
    }
}
