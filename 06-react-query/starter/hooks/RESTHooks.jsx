import { useQuery, useMutation } from "@tanstack/react-query";
import customFetch from "../utils/utils";
import { toast } from "react-toastify";

export const useGetTasks = () => {
  return useQuery({
    queryKey: ['tasks'],
    queryFn: async () => {
      const {data} = await customFetch.get("/");
      return data;
    },
  });
}

export const useCreateTasks = (queryClient) => {
  return useMutation({
    mutationFn: (task) => customFetch.post('/', {title: task}),
    onSuccess: ()=>{
      queryClient.invalidateQueries({queryKey: ['tasks']})
      toast.success("Task added")
    },
    onError: (error) => {
      toast.error("Erro ao processar sua solicitação!")
    }
  })
}

export const useEditTask = (queryClient) => {
  return useMutation({
    mutationFn: ({isDone, id}) => {
      return customFetch.patch(`${id}`, {isDone: !isDone})
    },
    onSuccess: (response, variables) => {
      if (response?.data?.msg === 'task does not exist') {
        toast.error('Task does not exist.')
      } else {
        const {title, isDone} = variables
        if (!isDone) {
          if (toast.isActive) {
            toast.dismiss()
          }
          toast.success(`Task '${title}' completed successfully!`)
        }
  
        queryClient.invalidateQueries({queryKey: ['tasks']})
      }
    },
    onError: (error) => {
      toast.error(error.message)
    }
  })
}

export const useDeleteTask = (queryClient) => {
  return useMutation({
    mutationFn: ({id}) => {
      return customFetch.delete(`/${id}`)
    },

    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['tasks']})
    }
  })
}