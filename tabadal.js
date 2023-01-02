
window.onload = (event) => {
    setTimeout(function () {

        const s0000_special_category_nav_list_id = document.getElementById("s0000_special_category_nav_list_id");
        const allProductLi = elementMaker("li", ["all_product_li"]);
        allProductLi.innerText = `All Products`;
        s0000_special_category_nav_list_id.appendChild(allProductLi);

        allProductLi.addEventListener("click", function () {
            typeof handleNavigate == "function" && handleNavigate("/items");
        });

        const brand_img_common = document.querySelectorAll(".brand_img_common");
        for (const brand_img of brand_img_common) {
            brand_img.addEventListener("mouseover", function () {
                brand_img.style.filter = "grayscale(0)";
                brand_img.style.opacity = `1`;
            });
            brand_img.addEventListener("mouseout", function () {
                brand_img.style.filter = "grayscale(100%)";
                brand_img.style.opacity = `0.5`;
            });

        }


        function elementMaker(name, className, id) {
            try {
                let element = document.createElement(name);
                className && (element.className = className.join(" "));
                id && (element.id = id);
                return element;
            } catch (err) {
                console.log(err.message);
            };
        };

        function setAttributes(elementName, allAttributes) {
            for (let key in allAttributes) {
                elementName.setAttribute(key, allAttributes[key]);
            };
        };
    }, 1350);
};