import { StickyNote } from "lucide-react";
export const Editor = ({ notesData }) => {
  return (
    <div className="max-w-md m-auto space-y-8">
      <h2 className="p-4">My Notes</h2>
      <div className="space-y-4">
        {notesData.map((item) => {
          return (
            <div
              className=" p-2 rounded-xl text-slate-600"
              key={item.id}
              style={{ background: "#" + item.color }}
            >
              <div className=" flex items-center">
                <StickyNote
                  className=" bg-white rounded-xl p-0.5 m-1.5 "
                  color="#F00D7B"
                  size={30}
                />
                <div>{item.body}</div>
                {/* <div>{item.userId}</div> */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
