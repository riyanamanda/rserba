package com.ran.erba.service.implement;

import com.ran.erba.model.entity.Post;
import com.ran.erba.service.interfaces.FileService;
import com.ran.erba.service.interfaces.PostService;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.apache.commons.io.FilenameUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.*;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

/**
 * @author Riyan Amanda
 * {@code @linkedin} <a href="https://linkedin.com/in/riyan-amanda">...</a>
 * @since 30/01/2025, Thursday
 **/

@Service
@RequiredArgsConstructor
@Transactional
public class FileServiceImpl implements FileService {

    @Value("${project.uploads.location}")
    private String rootPath;

    private final PostService postService;

    @Override
    public void uploadPostImage(Integer postId, MultipartFile file) throws IOException {
        Post post = postService.findById(postId);
        String fileName = post.getId() + "." + FilenameUtils.getExtension(file.getOriginalFilename());
        String filePath = rootPath + "/images/posts" + File.separator + fileName;
        File fileDirectory = new File(rootPath);
        if (!fileDirectory.exists()) fileDirectory.mkdirs();
        Files.copy(file.getInputStream(), Paths.get(filePath), StandardCopyOption.REPLACE_EXISTING);

        post.setImage(fileName);
    }

    @Override
    public InputStream servePostImage(String filename) throws FileNotFoundException {
        String filePath = rootPath + "/images/posts" + File.separator + filename;
        InputStream inputStream = new FileInputStream(filePath);

        return inputStream;
    }
}
