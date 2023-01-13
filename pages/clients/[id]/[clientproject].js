import { useRouter } from "next/router";

function SelectedClientProjectPage() {
  const router = useRouter();

  function loadProjectHandler() {
    // load data...
    router.push({
      pathname: "/clients/[id]/[clientprojectid]",
      query: {id: "max", clienprojectid: "projecta"}
    });
  }

  return (
    <div>
      <h1>The Project Page for a Specific Project for a Selected Client</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
}

export default SelectedClientProjectPage;
