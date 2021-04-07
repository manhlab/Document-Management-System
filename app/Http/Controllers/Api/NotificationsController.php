<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class NotificationsController extends Controller
{
    /**
     * Get all notifications
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = request()->user()->notifications;
        return $this->respond($data);
    }

    /**
     * Get read notifications
     *
     * @return \Illuminate\Http\Response
     */
    public function read()
    {
        $data = request()->user()->readNotifications;
        return $this->respond($data);
    }

    /**
     * Get unread notifications
     *
     * @return \Illuminate\Http\Response
     */
    public function unread()
    {
        $data = request()->user()->unreadNotifications;
        return $this->respond($data);
    }

    /**
     * Mark all as read
     *
     * @return \Illuminate\Http\Response
     */
    public function markAllAsRead()
    {
        request()->user()->unreadNotifications->markAsRead();
        return $this->respondNoContent();
    }

    /**
     * Mark as read
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function markAsRead($id)
    {
        $data = request()->user()->notifications->where('id', $id)->first();
        $data->markAsRead();
        return $this->respond($data);
    }

    /**
     * Mark as unread
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function markAsUnread($id)
    {
        $data = request()->user()->notifications->where('id', $id)->first();
        $data->markAsUnread();
        return $this->respond($data);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        request()->user()->notifications->where('id', $id)->first()->delete();
        return $this->respondNoContent();
    }
}
