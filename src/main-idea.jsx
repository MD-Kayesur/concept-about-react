export default function MainIdea({ name }) {
  const styleName = {
    width: "100%",
    marginTop: "20px",
    marginButtom: "20px",
    textColor: "tomato",
    text:'left'
  };

  return (
    <div>
      <h3>
1. when we will start to learn react we should to knok
 how to declear a componant. and we will add ||.jsx||after componant file, that will be another file from root file 
 <br />
 ১. কম্পোনেন্ট ঘোষণা করা এবং .jsx এক্সটেনশন ব্যবহার করা
যখন আমরা React শিখতে শুরু করি, আমাদের জানতে হবে কিভাবে একটি কম্পোনেন্ট (Component) ঘোষণা করতে হয়। কম্পোনেন্টের জন্য আমরা .jsx এক্সটেনশন ব্যবহার করবো।
🔹 সাধারণত, প্রতিটি কম্পোনেন্ট আলাদা ফাইলে রাখা হয়, যা root file (App.jsx বা index.jsx) থেকে আলাদা হবে।
 <br />
 (((main-aidea.jsx)))
 <br />
 2. if we create a componant we should write  ||export and defult|| 
 before function then a function name but that function name will start with camalecase first later.
 <br />
 ২. কম্পোনেন্টে export default ব্যবহার করা এবং CamelCase নামকরণ করা
🔹 React কম্পোনেন্টের নাম অবশ্যই CamelCase ফরম্যাটে হতে হবে (অর্থাৎ, প্রতিটি শব্দের প্রথম অক্ষর বড় হাতের হবে)।
🔹 কম্পোনেন্ট ফাইল থেকে এক্সপোর্ট করতে export default ব্যবহার করতে হয়।
<br />
((((export default function (M)ainIdea ))))
<br />
3  . we will take prametar maybe it will be more. and it will be like abject distracted  that will write into seconed braket {}
<br />
৩. কম্পোনেন্টে প্যারামিটার নেওয়া (Props ব্যবহার করা)
🔹 আমরা যদি কম্পোনেন্টে কিছু প্যারামিটার (props) পাঠাতে চাই, তাহলে এগুলো অবজেক্ট ডিস্ট্রাকচারিং (Object Destructuring) এর মাধ্যমে গ্রহণ করা যায়।
🔹 এই props গুলো দ্বিতীয় ব্র্যাকেট {} এর মধ্যে লিখতে হয়।
<br />
((((export default function MainIdea (prametar ) ))))
<br />
4.  if we will access that export componant from root || app.jsx|| 
and we will import that export componant by function name (vs will suggest ).
<br />
৪. App.jsx ফাইলে কম্পোনেন্ট ইমপোর্ট করা
🔹 আলাদা করা কম্পোনেন্ট ফাইলকে App.jsx এ ইমপোর্ট (import) করে ব্যবহার করতে হয়।
🔹 VS Code সাধারণত আমাদের ইমপোর্ট স্টেটমেন্ট সাজেস্ট করবে।
<br />
(((((import import MainIdea from './main-idea';)))))
<br />
5.  if we declear a function we will write return . 
<br />
৫. কম্পোনেন্টে return ব্যবহার করা
🔹 প্রতিটি React কম্পোনেন্টে return() লিখতে হয়, কারণ এটি JSX কোড রেন্ডার করতে সাহায্য করে।
🔹 JSX (JavaScript XML) হলো HTML এর মতো দেখতে একটি syntax, যা React এর মাধ্যমে ব্রাউজারে রেন্ডার হয়।
<br />

((((return()))))
<br />
6.  if we want to declear a object or array in root componant so we will write into root function and on the return.
<br />

৬. যদি আমরা App.jsx বা Root Component-এ কোনো Object বা Array ডিক্লেয়ার করতে চাই
আমরা যখন App.jsx বা Root Component-এ কোনো Object বা Array ডিক্লেয়ার করবো, তখন সেটি Root Function এর মধ্যে লিখতে হবে এবং return() এর মধ্যে সেটি ব্যবহার করতে হবে।
<br />




      </h3>
      <hr />
      <h2 style={styleName}> {name}</h2>
    </div>
  );
}
