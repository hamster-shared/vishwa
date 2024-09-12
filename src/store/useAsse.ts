export default function useAssets () {
  const getImageURL = (url: string) => {
    const modules:Record<string,any> = import.meta.glob("@/assets/images/*.*",{eager: true});
    if(modules[url]) return modules[url].default;
    else {
      console.log('Error url')
    }
  }

  const getSvgURL = (url: string) => {
    const modules:Record<string,any> = import.meta.glob("@/assets/svg/*.*",{eager: true});
    if(modules[url]) return modules[url].default;
    else {
      console.log('Error url')
    }
  }

  return { getImageURL, getSvgURL }
}