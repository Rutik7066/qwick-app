import { component$, useMount$, useStore } from "@builder.io/qwik";
import { useLocation, useNavigate } from "@builder.io/qwik-city";

export default component$(() => {
  const loc = useLocation();
  const uid: string = loc.query.uid;
  const folderid: string = loc.query.folder;

  const data = {
    id: 0,
    CustomerID: 0,
    aws_id: "",
    status: 0,
    length: 0,
    images: [],
  };
  const store = useStore({ data: data }, { recursive: true });
  const nav = useNavigate();

  useMount$(async () => {
    console.log(uid, folderid);
    const url =
      "http://ec2-13-232-60-200.ap-south-1.compute.amazonaws.com:3000/getfolder?uid=" +
      uid +
      "&aws_id=" +
      folderid;
    console.log(url);
    const res = await fetch(url);
    store.data = await res.json();
    console.log(res);
    console.log(store.data);
  });

  return (
    <div className="w-auto h-auto">
      <div className="sticky top-0 z-30  px-2 py-4 bg-white justify-center items-center sm:px-4 shadow">
        <a href="/" className="text-xl font-semibold text-indigo-600 ">
          Photo Gallery
        </a>
      </div>
      <div className="grid lg:grid-cols-4 gap-10 p-5 ">
        {store.data.images.map((image) => (
          <button onClick$={() => (image.is_selected = !image.is_selected)}>
            <img
              src={image.bucket_url}
              className="pointer-events-none hover:shadow-2xl rounded-xl"
            />
            <div className="flex flex-row justify-between items-center">
              <h6 className="text-base py-2 ">{image.name}</h6>
              {image.is_selected ? (
                <img
                  className="w-5 m-3 "
                  src="https://www.kindpng.com/picc/m/697-6979063_instagram-like-icon-png-clipart-png-download-love.png"
                  alt=""
                />
              ) : (
                <img
                  className="w-6 m-3"
                  src="https://www.kindpng.com/picc/m/169-1694281_heart-symbol-computer-icons-heart-icon-instagram-png.png"
                  alt=""
                />
              )}
            </div>
          </button>
        ))}
      </div>
      <div className="sticky bottom-0 flex flex-row bg-white lg:justify-end justify-between items-center  px-5 min-w-screen">
        <button
          onClick$={async () => {
            store.data.status = 1;
            console.log(store.data);

            await fetch(
              "http://ec2-13-232-60-200.ap-south-1.compute.amazonaws.com:3000/updatefolder",
              {
                method: "POST",
                body: JSON.stringify(store.data),
                headers: {
                  "Content-type": "application/json; charset=UTF-8",
                },
              }
            ).then((result) => {
              if (result.status == 200) {
                console.log("Done");

                nav.path = "/saved";
              } else {
                console.log("Failed");

                nav.path = "/savefailed";
              }
            });
          }}
          className="m-3 flex items-center justify-center rounded-full  peer-hover:bg-indigo-600 py-2 px-3 text-base font-medium text-indigo-700 hover:bg-indigo-100 "
        >
          Save Selection
        </button>
        <button
          onClick$={async () => {
            store.data.status = 2;
            console.log(store.data);
            await fetch(
              "http://ec2-13-232-60-200.ap-south-1.compute.amazonaws.com:3000/updatefolder",
              {
                method: "POST",
                body: JSON.stringify(store.data),

                headers: {
                  "Content-type": "application/json; charset=UTF-8",
                },
              }
            ).then((result) => {
              if (result.status == 200) {
                console.log("Done");

                nav.path = "/selectiondone";
              } else {
                console.log("Failed");
                nav.path = "/selectionfailed";
              }
            });
          }}
          className="m-3 flex items-center justify-center rounded-full  peer-hover:bg-indigo-600 py-2 px-3 text-base font-medium text-indigo-700 hover:bg-indigo-100 "
        >
          Selection Done
        </button>
      </div>
    </div>
  );
});
