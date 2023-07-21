import { PoppinsFont } from "#/utils/font";

const FontFamily = () => (
    <style jsx global>{`
       html {
          font-family: ${PoppinsFont.style.fontFamily};
       }
    `}</style>
  );

export default FontFamily;