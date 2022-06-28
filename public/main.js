let n = 1;
GetCSS.onclick = () => {
  let request = new XMLHttpRequest();
  request.open("GET", "/style.css");
  request.onreadystatechange = () => {
    console.log(request.readyState);
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        const style = document.createElement("style");
        style.innerHTML = request.response;
        document.head.appendChild(style);
      } else {
        alert("加载css失败");
      }
    }
  };
  request.send();
};
GetXML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/4.xml");
  request.onreadystatechange = () => {
    // console.log(request.readyState);
    if (request.readyState === 4 && request.status === 200) {
      // if (request.status >= 200 && request.status < 300)
      console.log(request.responseXML);
      {
        const dom = request.responseXML;
        const text = dom.getElementsByTagName("warning")[0].textContent;
        console.log(text.trim());
      }
    }
  };
  console.log(1);
  request.send();
};
// onload和onerror会将路径错误是的提示显示在网页上这不符合预期，弃用；onreadystatechange就算不成功下载所需要的内容，也会返回4，因为其下载了下载失败时的提示，弃用

GetJS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/2.js");
  request.onload = () => {
    console.log("ok");
    const script = document.createElement("script");
    script.innerHTML = request.response;
    document.body.appendChild(script);
  };

  request.onerror = () => {
    console.log("no");
  };

  request.send();
};

GetHTML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/3.html");
  request.onreadystatechange = () => {
    console.log(request.readyState);
    if (request.readyState === 4) {
      const div = document.createElement("div");
      div.innerHTML = request.response;
      document.body.appendChild(div);
    }
  };

  request.send();
};
GetJSON.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/5.json");
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      console.log(request.response);
      const object = JSON.parse(request.response);
      myName.textContent = object.name;
    }
  };
  request.send();
};
// Next.onclick = () => {
//   const request = new XMLHttpRequest();
//   console.log(1);
//   request.open("GEt", "/page1");

//   request.onreadystatechange = () => {
//     console.log(1);
//     if (request.readyState === 4 && request.status === 200) {
//       const array = JSON.parse(request.response);
//       array.forEach((item) => {
//         const li = document.createElement("li");
//         li.textContent = item.id;
//         xxx.appendChild(li);
//       });
//       n += 1;
//     }
//   };
//   request.send();
//   console.log(request.readyState);
// };
// let n = 1;
Next.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", `/page${n + 1}`);
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const array = JSON.parse(request.response);
      array.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item.id;
        xxx.appendChild(li);
      });
      n += 1;
    }
  };
  request.send();
};
