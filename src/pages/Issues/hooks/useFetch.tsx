import { useCallback, useEffect, useState } from "react";
import { DEFAULT_ERROR_MESSAGE, INVALID_CREDENTIALS, PAGE_NOT_FOUND } from "../constants";
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
  const [errorMessage, setErrorMessage] = useState('');
  const [data, setData] = useState<Array<Issue>>([])

  const handleNetworkError = useCallback((status: number) => {
    switch (status) {
      case 400: {
        setErrorMessage(`${status} ${PAGE_NOT_FOUND}`)
        return;
      }
      case 401: {
        setErrorMessage(`${status} ${INVALID_CREDENTIALS}`)
        return;
      }
      default: {
        setErrorMessage(DEFAULT_ERROR_MESSAGE)
      }
    }
  }, [])

  const fetchData = useCallback(async (url: string) => {
    setIsLoading(true)
    try {
      const res = await fetch(url, {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
          // 'Authorization': `token ${token}`
        }
      })
      if (res?.ok) {
        const data = await res.json();
        setData(data)
        setIsLoading(false);
        setIsError(false);
      } else {
        setIsError(true)
        handleNetworkError(res.status)
      }
    } catch (error) {
      setIsError(true);
      setIsLoading(false)
      if (error instanceof Error) {
        setErrorMessage(error?.message)
      }
    }
  }, [url])


  useEffect(() => {
    fetchData(url);
  }, [fetchData])

  return {
    issuesData: data,
    isLoading,
    isError,
    errorMessage
  }
}