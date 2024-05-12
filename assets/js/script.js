const show = document.querySelector("#showpass");

show.onclick = () => {
    let pass = document.querySelector("#pass");
    switch (pass.getAttribute("type")) {
        case "password":
            pass.setAttribute("type", "text");
                show.innerHTML = "visibility_off";
                    break;
    
                    default:
                        pass.setAttribute("type", "password");
                            show.innerHTML = "visibility";
                                break;
    }                
}