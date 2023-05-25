import { createContext, useContext } from "react";
import Youtube from "../api/youtube";
import FakeYoutube from "../api/fakeYoutube";

// 우산 만들기, 어떤 유튜브 인스턴스를 사용할것인지 결정
export const YoutubeApiContext = createContext();

const youtube = new FakeYoutube();

export function YoutubeApiProvider({children}){
  return (
    <YoutubeApiContext.Provider value={{youtube}}>
      {children}
    </YoutubeApiContext.Provider>
  );
}

export function useYoutubeApi(){
  return useContext(YoutubeApiContext);
}