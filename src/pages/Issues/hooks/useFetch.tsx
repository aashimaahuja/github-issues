import { useEffect, useState } from "react";
import { token } from "../constants";
import { IssueState } from "../enums/IssueState";

type Issue = {
  id: string,
  title: string,
  body: string,
  labels: Array<any>,
  comments: number,
  state: IssueState
}

export const useFetch = (url: string) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState<Array<Issue>>([])

  useEffect(() => {
    setIsLoading(true)
    fetch(url, {
      // headers: {
      //   'Accept': 'application/vnd.github.v3+json',
      //   'Authorization': `token ${token}`
      // }
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setIsLoading(false)
        setIsError(false)
      }).catch(() => {
        setIsError(true);
        // setIsLoading(false)
      })
  }, [url])

  return {
    issuesData: data,
    isLoading,
    isError
  }
}