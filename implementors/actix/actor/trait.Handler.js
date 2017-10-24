(function() {var implementors = {};
implementors["actix_web"] = ["impl&lt;T, A, H&gt; Handler&lt;IoStream&lt;T, A&gt;, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/io/error/struct.Error.html\" title=\"struct std::io::error::Error\">Error</a>&gt; for <a class=\"struct\" href=\"actix_web/struct.HttpServer.html\" title=\"struct actix_web::HttpServer\">HttpServer</a>&lt;T, A, H&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://docs.rs/tokio-io/0.1/tokio_io/trait.AsyncRead.html\" title=\"trait tokio_io::AsyncRead\">AsyncRead</a> + <a class=\"trait\" href=\"https://docs.rs/tokio-io/0.1/tokio_io/trait.AsyncWrite.html\" title=\"trait tokio_io::AsyncWrite\">AsyncWrite</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;A: 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;H: HttpHandler + 'static,&nbsp;</span>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
