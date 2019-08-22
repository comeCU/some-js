package action;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

import entity.Person;

/**
 * Servlet响应请求，提供数据
 * @author dong
 * @date Aug 21, 2019 8:16:31 PM
 */
@WebServlet("/AjaxDataServlet")
public class AjaxDataServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public AjaxDataServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// 提供数据到前端
	    String type = request.getParameter("type");
	    if (null != type && "json".equals(type)) {
            List<Person> list = new ArrayList<Person>();
            list.add(new Person("aaa", "123", new Date()));
            list.add(new Person("bbb", "456", new Date()));
            list.add(new Person("ccc", "789", new Date()));
            // list转json
            Gson gson = new Gson();
            String json = gson.toJson(list);
            // 编码
            response.setContentType("text/html; charset=utf-8");
            // 写出到浏览器
            PrintWriter writer = response.getWriter();
            writer.write(json);
            writer.flush();
            writer.close();
	    }
	    
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
