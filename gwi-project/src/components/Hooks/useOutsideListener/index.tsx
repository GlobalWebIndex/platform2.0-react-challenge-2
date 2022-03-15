import React, { useRef, useEffect } from "react"

export function useOutsideAlerter(initialValue: boolean) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = React.useState(initialValue)

  function handleClickOutside(event: { target: any }) {
    if (ref.current && !ref.current.contains(event.target)) {
      setVisible(false)
    }
  }

  const handleKeyPress = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      setVisible(false)
    }
  }
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true)
    document.addEventListener("keydown", handleKeyPress, true)
    return () => {
      document.addEventListener("click", handleClickOutside, true)
      document.addEventListener("keydown", handleKeyPress, true)
    }
  }, [ref])
  return {
    visible,
    setVisible,
    ref,
  }
}
