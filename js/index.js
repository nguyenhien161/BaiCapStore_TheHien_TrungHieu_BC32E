function layDanhSachProductApi() {
    var promise = axios({
        url: 'https://shop.cyberlearn.vn/api/Product',
        method: 'Get'
    });


    promise.then(function (result) {
        console.log(result.data.content);
        renderProduct(result.data.content);
    });
    promise.catch(function (err) {
        console.log(err)
    });
}
window.onload = function () {
    layDanhSachProductApi();
}

function renderProduct(arrProduct) {
    var products = ''; //output: string html 
    for (var i = 0; i < arrProduct.length; i++) {
        var pr = arrProduct[i];
        products += `
            <tr>
                <td><img src="${pr.image}"/></td>
            </tr>
            <tr>
                <td>${pr.name}</td>
                <br/>
                <td>${pr.shortDescription}</td>
            </tr>
        `;
    }
    document.querySelector('#tblproduct').innerHTML = products;

}