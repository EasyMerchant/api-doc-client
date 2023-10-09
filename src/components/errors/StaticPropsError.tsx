const StaticPropsError = ({ error, root }: { error: any; root?: string }) => {
  const e = JSON.parse(error);

  return (
    <div className='p-10 max-w-[1280px] h-screen flex flex-col justify-center items-center m-auto'>
      <span className='font-bold'>{root}</span>
      <span className='font-bold'>{e?.message}</span>
      {e.status === 401 && (
        <span>Make sure you are using a valid token from server</span>
      )}

      {e.status === 400 && (
        <span>
          Make sure the server is online or you are using a correct server url
        </span>
      )}
    </div>
  );
};

export default StaticPropsError;
