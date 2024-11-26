export default function VideoSection() {
  return (
    <div className="relative w-full mt-24 h-[450px]">
      <video
        className="w-full h-full object-fill"
        src="/mdf.mp4"
        type="video/mp4"
        autoPlay
        loop
        muted
        playsInline
      />
    </div>
  );
}
