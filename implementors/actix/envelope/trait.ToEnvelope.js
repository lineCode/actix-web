(function() {var implementors = {};
implementors["actix_web"] = ["impl&lt;A, M&gt; ToEnvelope&lt;A, M&gt; for <a class=\"struct\" href=\"actix_web/struct.HttpContext.html\" title=\"struct actix_web::HttpContext\">HttpContext</a>&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Actor&lt;Context = <a class=\"struct\" href=\"actix_web/struct.HttpContext.html\" title=\"struct actix_web::HttpContext\">HttpContext</a>&lt;A&gt;&gt; + <a class=\"trait\" href=\"actix_web/dev/trait.Route.html\" title=\"trait actix_web::dev::Route\">Route</a> + Handler&lt;M&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;M: ResponseType + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;M::Item: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;M::Error: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
