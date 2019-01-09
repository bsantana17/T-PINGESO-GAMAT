package usach.cl.gamat.Config;

import com.fasterxml.jackson.databind.ObjectMapper;


import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.AbstractAuthenticationProcessingFilter;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;
import org.springframework.web.bind.annotation.CrossOrigin;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.InputStream;
import java.io.StringWriter;
import java.nio.charset.StandardCharsets;
import java.util.Collections;
import java.util.Scanner;

public class LoginFilter extends AbstractAuthenticationProcessingFilter {

    public LoginFilter(String url, AuthenticationManager authManager) {
        super(new AntPathRequestMatcher(url));
        setAuthenticationManager(authManager);
    }

    @CrossOrigin
    @Override
    public Authentication attemptAuthentication(
            HttpServletRequest req, HttpServletResponse res)
            throws AuthenticationException, IOException, ServletException {
        // obtenemos el body de la peticion que asumimos viene en formato JSON
    	
        InputStream body = req.getInputStream();
        // Asumimos que el body tendrá el siguiente JSON  {"username":"ask", "password":"123"}
        // Realizamos un mapeo a nuestra clase User para tener ahi los datos
        AccountCredentials user = new ObjectMapper().readValue(body, AccountCredentials.class);
        System.out.println("AAAAAAAAAAAAAAAAAAAAAAAAAAAAa4");
        // Finalmente autenticamos
        // Spring comparará el user/password recibidos
        // contra el que definimos en la clase SecurityConfig
        return getAuthenticationManager().authenticate(
                new UsernamePasswordAuthenticationToken(
                        user.getUsername(),
                        user.getPassword(),
                        Collections.emptyList()
                )
        );
    }

    @Override
    protected void successfulAuthentication(
            HttpServletRequest req,
            HttpServletResponse res, FilterChain chain,
            Authentication auth) throws IOException, ServletException {

        // Si la autenticacion fue exitosa, agregamos el token a la respuesta
        JwtUtil.addAuthentication(res, auth.getName());
    }
}